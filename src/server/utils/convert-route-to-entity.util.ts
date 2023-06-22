const mapping: Record<string, string> = {
  companies: 'company',
  services: 'service',
  suggestions: 'suggestion',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
