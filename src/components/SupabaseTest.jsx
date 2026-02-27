import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const SupabaseTest = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Test: Fetch products
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await supabase
        .from('products')
        .select('*')
      
      if (error) throw error
      
      setProducts(data || [])
      console.log('✅ Successfully connected to Supabase!')
      console.log('Products:', data)
    } catch (err) {
      setError(err.message)
      console.error('❌ Error:', err)
    } finally {
      setLoading(false)
    }
  }

  // Test: Add a product
  const addTestProduct = async () => {
    try {
      const testProduct = {
        name: 'Test iPhone',
        brand: 'Apple',
        category: 'phones',
        price: 999,
        rating: 5,
        image: '📱'
      }

      const { data, error } = await supabase
        .from('products')
        .insert([testProduct])
        .select()
      
      if (error) throw error
      
      alert('✅ Product added successfully!')
      fetchProducts() // Refresh list
    } catch (err) {
      alert('❌ Error: ' + err.message)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Supabase Connection Test</h1>

        {/* Connection Status */}
        <div className="bg-zinc-900 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Connection Status</h2>
          
          {loading && (
            <p className="text-yellow-400">⏳ Connecting to Supabase...</p>
          )}
          
          {error && (
            <div className="bg-red-500/20 border border-red-500 p-4 rounded">
              <p className="text-red-500 font-bold">❌ Connection Error:</p>
              <p className="text-red-400">{error}</p>
              <p className="text-sm text-red-300 mt-2">
                Check your .env file and make sure the credentials are correct.
              </p>
            </div>
          )}
          
          {!loading && !error && (
            <div className="bg-green-500/20 border border-green-500 p-4 rounded">
              <p className="text-green-500 font-bold">✅ Connected Successfully!</p>
              <p className="text-green-400">Found {products.length} products in database</p>
            </div>
          )}
        </div>

        {/* Test Button */}
        <div className="bg-zinc-900 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Test Adding Product</h2>
          <button
            onClick={addTestProduct}
            className="bg-orange-100 px-6 py-3 rounded font-semibold hover:bg-orange-100/90"
          >
            Add Test Product
          </button>
          <p className="text-sm text-white/60 mt-2">
            Note: You must be logged in as admin for this to work
          </p>
        </div>

        {/* Products List */}
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Products in Database</h2>
          
          {products.length === 0 ? (
            <p className="text-white/60">No products yet. Add some using the admin dashboard!</p>
          ) : (
            <div className="space-y-2">
              {products.map((product) => (
                <div key={product.id} className="bg-zinc-800 p-4 rounded flex justify-between items-center">
                  <div>
                    <p className="font-bold">{product.image} {product.name}</p>
                    <p className="text-sm text-white/60">{product.brand} - ${product.price}</p>
                  </div>
                  <span className="text-xs bg-zinc-700 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SupabaseTest