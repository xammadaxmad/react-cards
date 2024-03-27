const LSHelper = {
    'store': function (key, objet_value) {
        let json_value = JSON.stringify(objet_value)
        localStorage.setItem(key, json_value)
    },
    'get': function (key) {
        let json_data = localStorage.getItem(key)
        return JSON.parse(json_data)
    }
}

export default LSHelper