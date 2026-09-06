# Reglas del proyecto

## Idioma

Siempre se responde en español, sin importar el idioma en el que esté escrita la consulta.

## Commits

Todo commit MUST seguir el formato validado por `commitlint.config.cjs`:
`{numero_rama}-{tipo}(detalle opcional): descripción`. `{tipo}` MUST ser uno
de los valores en inglés de `type-enum` de `@commitlint/config-conventional`
(`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`,
`chore`, `revert`) — MUST NOT traducirse, porque commitlint rechaza el commit
si no coincide. La descripción (subject) y, cuando el commit incluye varios
cambios, cada punto adicional del body MUST escribirse en español y MUST NOT
colocarse ni mencionarse ningún modelo IA como co-author.

Ejemplo:

```
12-feat: implementación de disponibilidad automática de variantes
- método calculatePublicAvailability para el nuevo cálculo
- se modificó el mapper de variantes para exponer el nuevo estado
```

## Verificación antes de subir cambios

Los hooks de Husky (`.husky/`) ya automatizan esto, pero como referencia:

- `pre-commit`: corre `lint-staged` (ESLint + Prettier sobre los archivos en stage).
- `commit-msg`: valida el mensaje del commit con commitlint.
- `pre-push`: corre `pnpm run check` (typecheck + lint + format:check) y `pnpm run build`.

## Stack

React + TypeScript + Tailwind CSS v4 + Vite, gestionado con pnpm.
