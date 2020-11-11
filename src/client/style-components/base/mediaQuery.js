// Device Breaking Points
const size = {
  smallPhone: "450px",
  phone: "600px",
  tabPort: "900px",
  tabLand: "1200px",
  bigDesktop: "1800px",
};

// Device Types
export const device = {
  smallPhone: `(max-width: ${size.smallPhone})`,
  phone: `(max-width: ${size.phone})`,
  tabPort: `(max-width: ${size.tabPort})`,
  tabLand: `(max-width: ${size.tabLand})`,
  bigDesktop: `(max-width: ${size.bigDesktop})`,
};
