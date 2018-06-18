const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_u2mDcx9bKA4z9VrtGx7JKCPM';

export default STRIPE_PUBLISHABLE