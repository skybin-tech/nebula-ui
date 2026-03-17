# Changelog

All notable changes to this project will be documented in this file.

## [0.0.9] - 2026-03-17

### Fixed

- **Form**: Wrapped `contextValue` in `useMemo` to prevent unnecessary re-renders of all context consumers on every Form render.
- **TextBox**: Destructured `registerFieldValidation` and `unregisterFieldValidation` from context before the registration `useEffect`, replacing the full context object as a dependency with the stable function references. This eliminates the infinite re-render loop caused by the effect firing on every render due to context object identity changes.
