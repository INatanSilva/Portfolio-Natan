import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const eslintConfig = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**'] },
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      // Guarda de montagem exigida pelo next-themes para evitar hydration mismatch.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
]

export default eslintConfig
