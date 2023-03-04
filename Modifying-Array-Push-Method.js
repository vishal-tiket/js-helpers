const array = [];

const oldPushMethod = array.push.bind(array);

array.push = (el) => {
    // perform the extra calculation/task here
    oldPushMethod(el);
    return array.length;
}

array.push(1)