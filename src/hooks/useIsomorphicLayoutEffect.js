import { useEffect, useLayoutEffect } from 'react'

// useLayoutEffect on the client (runs after hydration but before paint, so a
// state correction never flashes), useEffect on the server (where
// useLayoutEffect only warns).
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
