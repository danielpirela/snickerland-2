// User-to-role mapping for Snickerland 2
// All users automatically get "general" role

interface UserMapping {
  username: string;
  roles: string[];
}

const roleAssignments: UserMapping[] = [
  { username: 'VALENSBB', roles: ['agricultor'] },
  { username: 'XXXGORDO', roles: ['ganadero'] },
  { username: 'DanielP1932', roles: ['ingeniero'] },
  { username: 'davixcitoxx', roles: ['mecanico'] },
  { username: 'Caldepelle', roles: ['arquitecto'] },
  { username: 'MoronRespaldo', roles: ['pescador', 'tabernero'] },
  { username: 'N4NNEY', roles: ['arquitecto'] },
  { username: 'BatDaddy', roles: [] },
];

/**
 * Returns the roles assigned to a given username.
 * All users automatically receive "general" in addition to any specific roles.
 */
export function getUserRoles(username: string): string[] {
  const normalized = username.trim();
  const entry = roleAssignments.find(
    (m) => m.username.toLowerCase() === normalized.toLowerCase(),
  );
  const specificRoles = entry?.roles ?? [];
  // "general" always comes first
  return ['general', ...specificRoles];
}
