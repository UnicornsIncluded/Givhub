<<<<<<< HEAD
import { useEffect } from 'react';

export default function useKeyPress(key, callback, active = true) {
  useEffect(() => {
    const keypress = e => {
      if (e.key === key) {
        callback();
      }
    };

    if (active) {
      window.addEventListener('keypress', keypress);
    }

    return () => {
      if (active) {
        window.removeEventListener('keypress', keypress);
      }
    };
  }, [callback, active]);
=======
import {useEffect} from 'react'

export default function useKeyPress(key, callback, active = true) {
  useEffect(
    () => {
      const keypress = e => {
        if (e.key === key) {
          callback()
        }
      }

      if (active) {
        window.addEventListener('keypress', keypress)
      }

      return () => {
        if (active) {
          window.removeEventListener('keypress', keypress)
        }
      }
    },
    [callback, active]
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
