const filter = (arr, key, val) => {
    return arr.filter(item => item[key] === val);
};

export default filter;