var fs = require('fs');

var data = {},
    isChanged = false,
    DB_NAME = __dirname + '/db',
    NEXT_ID = [];

// init data
(function init() {
    try {
        var content = fs.readFileSync(DB_NAME, {encoding: 'utf8'});

        data = JSON.parse(content);

        Object.keys(data).forEach(function(table) {
            NEXT_ID[table] = 0;
            data[table].forEach(function(obj) {
                if (NEXT_ID[table] <= obj._id) {
                    NEXT_ID[table] = obj._id + 1;
                }
            });
        });

        // console.log(DB_NAME);
        // console.log(data);
        // console.log(NEXT_ID);

        setInterval(backup, 5000);
    } catch (err) {
        // console.log(err);
        fs.writeFileSync(DB_NAME, JSON.stringify(data), {encoding: 'utf8'});
        init();
    }
}());

function backup() {
    if (isChanged) {
        fs.writeFile(DB_NAME, JSON.stringify(data), function(err) {
            isChanged = false;
        });
    }
}

function list(table, start, count) {
    var ret = [],
        start = start || 0,
        end,
        obj;

    if (data[table]) {
        end = start + count || data[table].length;
        data[table].slice(start, end).forEach(function(o) {
            obj = {};
            iterate(o, function(p, v) {
                obj[p] = v;
            });
            ret.push(obj);
        });
    }

    return ret;
}

function add(table, obj) {
    if (!data[table]) {
        data[table] = [];
        NEXT_ID[table] = 0;
    }

    obj._id = NEXT_ID[table]++;
    data[table].push(obj);
    isChanged = true;
}

function remove(table, obj) {
    var id = obj,
        index = -1;

    if (typeof obj == 'object') {
        id = obj._id;
    }

    data[table].forEach(function(v, i) {
        if (v._id == id) {
            index = i;
        }
    });

    if (index >= 0) {
        data[table].splice(index, 1);
        isChanged = true;
    }
}

function update(table, obj) {
    var ref = get(table, obj._id);
    // console.log('update', ref);
    iterate(obj, function(p, v) {
        ref[p] = v;
    });
    isChanged = true;
}

function get(table, id) {
    var o = null;
    data[table].forEach(function(obj) {
        if (obj._id == id) {
            o = obj;
        }
    });
    return o;
}

function iterate(obj, callback) {
    Object.keys(obj).forEach(function(p) {
        callback(p, obj[p]);
    });
}

module.exports = {
    list: list,
    add: add,
    remove: remove,
    update: update
};
