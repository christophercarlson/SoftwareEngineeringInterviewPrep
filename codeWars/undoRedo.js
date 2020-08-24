"use strict";
let log = console.log

function undoRedo(object) {

  let actionsObjectArr = []
  let index = 0

  //object constructor to add to history with less code. 
  function History(type, key, oldValue, newValue) {
    this.type = type;
    this.key = key;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
  // custom err to throw when we do not meet the criteria in undo/redo functions below. 
  function UndoLimitException() {
    this.name = 'UndoLimitException';
    this.message = 'cannot undo';
  }
  function RedoLimitException() {
    this.name = 'RedoLimitException';
    this.message = 'cannot redo';
  }



  return {
    set: function (key, value) {
      if (key in object) {
        actionsObjectArr.push(new History('set', key, object[key], value));
      }
      else { actionsObjectArr.push(new History('new', key, null, value)) }

      object[key] = value
      index++;
      actionsObjectArr.length = index;
      log(actionsObjectArr)
    },

    get: function (key) {
      return object[key]
    },

    del: function (key) {
      actionsObjectArr.push(new History('del', key, object[key], null));
      delete object[key];
      index++;
      actionsObjectArr.length = index;
    },

    undo: function () {
      if (index <= 0) throw new UndoLimitException();
      index--;

      var h = actionsObjectArr[index];
      if (h.type == 'set') object[h.key] = h.oldValue;
      else if (h.type == 'new') delete object[h.key];
      else if (h.type == 'del') object[h.key] = h.oldValue;
    },

    redo: function () {
      if (index >= actionsObjectArr.length) throw new RedoLimitException();

      var h = actionsObjectArr[index];
      if (h.type == 'set') object[h.key] = h.newValue;
      else if (h.type == 'new') object[h.key] = h.newValue;
      else if (h.type == 'del') delete object[h.key];
      index++;
    }
  };
}

let obj = {
  x: 1,
  y: 2,
  j: 8
};


let test = undoRedo(obj);
log(test.set("p", 9))
log(obj)