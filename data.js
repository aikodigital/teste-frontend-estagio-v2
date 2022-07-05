fetch("json/equipment.json")
    .then(function (u) {
    return u.json();
})
    .then(function (json) {
    window.localStorage.setItem("equipment", JSON.stringify(json));
});
fetch("json/equipmentModel.json")
    .then(function (u) {
    return u.json();
})
    .then(function (json) {
    window.localStorage.setItem("equipmentModel", JSON.stringify(json));
});
fetch("json/equipmentPositionHistory.json")
    .then(function (u) {
    return u.json();
})
    .then(function (json) {
    window.localStorage.setItem("equipmentPositionHistory", JSON.stringify(json));
});
fetch("json/equipmentState.json")
    .then(function (u) {
    return u.json();
})
    .then(function (json) {
    window.localStorage.setItem("equipmentState", JSON.stringify(json));
});
fetch("json/equipmentStateHistory.json")
    .then(function (u) {
    return u.json();
})
    .then(function (json) {
    window.localStorage.setItem("equipmentStateHistory", JSON.stringify(json));
});