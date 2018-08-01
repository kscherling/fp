const shallowMerge = obj => (...objs) => Object.assign({}, obj, ...objs)

export default shallowMerge
