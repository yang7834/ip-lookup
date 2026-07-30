module.exports = (ip) => {
  const parts = ip.split('.').map(Number);
  return {
    ip,
    class: parts[0] < 128 ? 'A' : parts[0] < 192 ? 'B' : parts[0] < 224 ? 'C' : parts[0] < 240 ? 'D' : 'E',
    isPrivate: parts[0] === 10 || (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) || (parts[0] === 192 && parts[1] === 168),
  };
};
