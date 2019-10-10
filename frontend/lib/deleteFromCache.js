export default (cache, item) => {
  // Loop through all the data in our cache
  // And delete any items that start with "ListItem"
  // This empties the cache of all of our list items and
  // forces a refetch of the data.
  Object.keys(cache.data.data).forEach(key => {
    switch (item) {
      case 'items':
        return key.match(/^Item/) && cache.data.delete(key);

      case 'invoices':
        return key.match(/^Invoice/) && cache.data.delete(key);

      default:
        return null;
    }
  });
};
