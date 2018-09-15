import {
  getAuth,
  createConnection,
  subscribeEntities,
  ERR_HASS_HOST_REQUIRED
} from 'home-assistant-js-websocket';

export async function connect() {
  let auth;
  try {
    // Try to pick up authentication after user logs in
    auth = await getAuth();
  } catch (err) {
    if (err === ERR_HASS_HOST_REQUIRED) {
      const hassUrl = prompt('What host to connect to?', 'http://localhost:8123');
      auth = await getAuth({ hassUrl });
    } else {
      alert(`Unknown error: ${err}`);
      return;
    }
  }
  const connection = await createConnection({ auth });
  subscribeEntities(connection, (ent) => console.log(ent));
}
