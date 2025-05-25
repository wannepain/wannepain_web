// src/routes/blog/[slug]/+page.js
export function load({ params }) {
    return { packageId: params.packageId };
  }
  