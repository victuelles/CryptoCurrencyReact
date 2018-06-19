const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_u2mDcx9bKA4z9VrtGx7JKCPM'
  : 'pk_test_u2mDcx9bKA4z9VrtGx7JKCPM';

export default STRIPE_PUBLISHABLE