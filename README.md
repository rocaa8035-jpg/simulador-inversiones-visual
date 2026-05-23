# 📈 Simulador Estadístico de Inversiones

Un simulador financiero interactivo desarrollado en **React** y **Tailwind CSS** que permite visualizar el impacto real del interés compuesto a largo plazo en comparación con el ahorro pasivo ("bajo el colchón"). El proyecto incluye un modo de prueba de estrés para evaluar estrategias frente a crisis financieras históricas.

🚀 **[Ver la aplicación en vivo aquí](https://simulador-inversiones-visual.vercel.app)**

---

## ✨ Características Principales

*   **Cálculo Reactivo en Tiempo Real:** Los gráficos y las métricas se actualizan instantáneamente al arrastrar los controles de capital, aportes y tasas de interés.
*   **Análisis Comparativo Semántico:** Muestra de forma clara la brecha económica (costo de oportunidad) entre invertir el dinero de forma compuesta o guardarlo sin rendimientos.
*   **⚠️ Modo Prueba de Estrés (Simulación de Crisis):** Permite introducir un desplome de mercado del -25% en el Año 5 seguido de un periodo de estancamiento y posterior recuperación, educando al usuario sobre la resiliencia de los mercados a largo plazo.
*   **Interfaz Ultra Moderna:** Diseñada con una paleta oscura sofisticada optimizada para pantallas móviles y de escritorio.

## 🛠️ Tecnologías Utilizadas

*   **React** (Vite como entorno de desarrollo rápido)
*   **Recharts** (Biblioteca de gráficos vectoriales optimizada para React)
*   **Tailwind CSS** (Estilos y diseño responsivo)
*   **Lucide React** (Iconografía limpia y moderna)

---

## 📐 Decisiones de Arquitectura y Código

Para demostrar buenas prácticas de ingeniería de software, el proyecto se estructuró bajo los siguientes principios:

1.  **Separación de Conceptos (Separation of Concerns):** Toda la lógica de las matemáticas financieras se extrajo a funciones puras aisladas dentro de `src/utils/financeCalcs.js`. Esto facilita las pruebas unitarias y desvincula la lógica del negocio de los componentes visuales.
2.  **Optimización de Rendimiento:** Se implementó el hook `useMemo` de React para envolver los cálculos del interés compuesto. Esto garantiza que las operaciones matemáticas pesadas solo se ejecuten cuando el usuario modifique realmente los valores de los deslizadores, evitando re-renders innecesarios en el gráfico.
3.  **Gráficos Compuestos Avanzados:** En lugar de usar configuraciones por defecto, se personalizó un `<ComposedChart>` de Recharts combinando áreas con gradientes dinámicos (`linearGradient`) y líneas discontinuas (`strokeDasharray`) para contar una historia visualmente rica.

---

## 📦 Instalación Local

Si deseas clonar este proyecto y ejecutarlo en tu entorno local, sigue estos pasos:

```bash
# 1. Clonar el repositorio
git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)

# 2. Entrar al directorio del proyecto
cd simulador-inversiones

# 3. Instalar todas las dependencias
npm install

# 4. Iniciar el servidor de desarrollo local
npm run dev
Abra http://localhost:5173 en su navegador para ver el resultado.
```
