# Next.js 15 App Router Unexpected Behavior with fetch and getServerSideProps
This repository demonstrates an unexpected behavior in Next.js 15's App Router when using both `fetch` and `getServerSideProps` within the same component.  The issue arises when attempting to fetch data in `getServerSideProps` that is also fetched client-side via `fetch`.

## Bug Description
When both methods are used, the client-side fetch sometimes returns a stale response or does not fetch the data at all, even if the data has changed on the server.

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the page initially displays data fetched by `getServerSideProps`. However, subsequent client-side fetches may fail to update the data.

## Expected Behavior
Both `getServerSideProps` and the client-side `fetch` should successfully fetch and display the data. The client-side fetch should reflect any changes made on the server.

## Actual Behavior
The client-side `fetch` often displays outdated or no data at all.