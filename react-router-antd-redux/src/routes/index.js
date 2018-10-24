import moment from 'moment';
import URLSearchParams from 'url-search-params';

import _sitemap from './sitemap';

export const resolveStringFromSearchParam = (param, searchString, defaultValue = null) => {
  const query = new URLSearchParams(searchString);
  const value = query.get(param);
  if (value == null) {
    return defaultValue;
  }
  if (value === '') {
    return defaultValue;
  }
  return value;
};

export const resolveBooleanFromSearchParam = (param, searchString, defaultValue = false) => {
  const query = new URLSearchParams(searchString);
  const value = query.get(param);

  if (value == null) {
    return defaultValue;
  }
  if (value === '') {
    return true;
  }
  if (value === 'true') {
    return true;
  }

  return false;
};

export const resolveIntFromSearchParam = (param, searchString, defaultValue = null) => {
  const query = new URLSearchParams(searchString);
  const value = query.get(param);

  if (value == null) {
    return defaultValue;
  }

  const result = parseInt(value, 0);
  return !Number.isNaN(result) ? result : null;
};

export const resolveTimestampFromSearchParam = (param, searchString, defaultValue = null) => {
  const query = new URLSearchParams(searchString);
  const value = query.get(param);

  if (value == null) {
    return defaultValue;
  }

  return moment(value)
    .toDate()
    .getTime();
};

export const resolveMomentFromSearchParam = (param, searchString, defaultValue = null) => {
  const query = new URLSearchParams(searchString);
  const value = query.get(param);

  if (value == null) {
    return defaultValue;
  }

  return moment(value);
};

export const assignSearchString = (searchString, params) => {
  const query = new URLSearchParams(searchString);

  Object.keys(params).forEach((paramName) => {
    if (params[paramName] == null) {
      query.delete(paramName);
    } else {
      let value = params[paramName];
      if (moment.isMoment(value)) {
        value = value.format('YYYY-MM-DD HH:mm:ss');
      }
      query.set(paramName, value);
    }
  });

  return query.toString();
};

export const convertToSearchString = (params) => {
  const query = new URLSearchParams();

  Object.keys(params).forEach((paramName) => {
    query.set(paramName, params[paramName]);
  });

  return query.toString();
};

export const sitemap = _sitemap;

export const getCurrentMenu = (pathname) =>
  _sitemap.find((menu) => menu.key === pathname.split('/')[1]);

export const getCurrentSubMenu = (match, location) => {
  const currentMenu = getCurrentMenu(location.pathname);

  if (!currentMenu) return [null, null];

  const currentSubMenu = currentMenu.sub.find((subMenu) =>
    subMenu.test(match, location, location.search)
  );

  if (!currentSubMenu) return [null, currentMenu];

  return [currentSubMenu, currentMenu];
};
