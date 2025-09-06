import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { InfoSection } from '@/components/InfoSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { useCart } from '@/contexts/CartContext';
import { CheckoutData } from '@shared/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, getTotal, getSubtotal, getDiscount, appliedVoucher, clearCart } = useCart();
  const [formData, setFormData] = useState<CheckoutData>({
    name: '',
    email: '',
    paymentMethod: '',
    shippingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutData | 'shippingAddress', string>>>({});

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    if (!formData.shippingAddress.street.trim()) newErrors.shippingAddress = 'Street address is required';
    if (!formData.shippingAddress.city.trim()) newErrors.shippingAddress = 'City is required';
    if (!formData.shippingAddress.state.trim()) newErrors.shippingAddress = 'State is required';
    if (!formData.shippingAddress.zipCode.trim()) newErrors.shippingAddress = 'ZIP code is required';
    if (!formData.shippingAddress.country.trim()) newErrors.shippingAddress = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Store checkout data for bill generation
      const orderData = {
        ...formData,
        items,
        subtotal: getSubtotal(),
        discount: getDiscount(),
        total: getTotal(),
        appliedVoucher,
        orderDate: new Date().toISOString()
      };
      
      localStorage.setItem('wwe-order', JSON.stringify(orderData));
      clearCart();
      
      navigate('/bill');
    }
  };

  const updateShippingAddress = (field: keyof CheckoutData['shippingAddress'], value: string) => {
    setFormData(prev => ({
      ...prev,
      shippingAddress: {
        ...prev.shippingAddress,
        [field]: value
      }
    }));
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen">
      <InfoSection />
      <Header />
      <div className="container mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8"
        >
          Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="street">Street Address *</Label>
                    <Input
                      id="street"
                      value={formData.shippingAddress.street}
                      onChange={(e) => updateShippingAddress('street', e.target.value)}
                      className={errors.shippingAddress ? 'border-red-500' : ''}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.shippingAddress.city}
                        onChange={(e) => updateShippingAddress('city', e.target.value)}
                        className={errors.shippingAddress ? 'border-red-500' : ''}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.shippingAddress.state}
                        onChange={(e) => updateShippingAddress('state', e.target.value)}
                        className={errors.shippingAddress ? 'border-red-500' : ''}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.shippingAddress.zipCode}
                        onChange={(e) => updateShippingAddress('zipCode', e.target.value)}
                        className={errors.shippingAddress ? 'border-red-500' : ''}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={formData.shippingAddress.country}
                        onChange={(e) => updateShippingAddress('country', e.target.value)}
                        className={errors.shippingAddress ? 'border-red-500' : ''}
                      />
                    </div>
                  </div>
                  
                  {errors.shippingAddress && (
                    <p className="text-red-500 text-sm">{errors.shippingAddress}</p>
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer'].map((method) => (
                    <label key={method} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={(e) => setFormData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                        className="text-black focus:ring-black"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-2">{errors.paymentMethod}</p>
                )}
              </div>

              <Button 
                type="submit"
                className="w-full bg-black hover:bg-white hover:text-black text-lg py-6"
              >
                Generate Bill & Complete Order
              </Button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-6"
          >
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toLocaleString()}.00</p>
                </div>
              ))}
            </div>

            <hr className="mb-4" />
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${getSubtotal().toLocaleString()}.00</span>
              </div>
              {appliedVoucher && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({appliedVoucher.code}):</span>
                  <span>-${getDiscount().toLocaleString()}.00</span>
                </div>
              )}
              <div className="flex justify-between text-xl font-bold border-t pt-2">
                <span>Total:</span>
                <span className="text-black">${getTotal().toLocaleString()}.00</span>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> No payment will be processed. After submitting this form, 
                a bill will be generated for you to take a screenshot.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <CartSidebar />
    </div>
  );
}
