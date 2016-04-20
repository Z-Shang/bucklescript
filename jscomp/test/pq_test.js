// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Caml_builtin_exceptions = require("../runtime/caml_builtin_exceptions");

function insert(queue, prio, elt) {
  if (queue) {
    var right = queue[3];
    var left = queue[2];
    var e = queue[1];
    var p = queue[0];
    if (prio <= p) {
      return /* Node */[
              prio,
              elt,
              insert(right, p, e),
              left
            ];
    }
    else {
      return /* Node */[
              p,
              e,
              insert(right, prio, elt),
              left
            ];
    }
  }
  else {
    return /* Node */[
            prio,
            elt,
            /* Empty */0,
            /* Empty */0
          ];
  }
}

var Queue_is_empty = {
  0: "Pq_test.PrioQueue.Queue_is_empty",
  1: Caml_builtin_exceptions.get_id(),
  length: 2,
  tag: 248
};

function remove_top(param) {
  if (param) {
    var left = param[2];
    if (param[3]) {
      if (left) {
        var right = param[3];
        var rprio = right[0];
        var lprio = left[0];
        if (lprio <= rprio) {
          return /* Node */[
                  lprio,
                  left[1],
                  remove_top(left),
                  right
                ];
        }
        else {
          return /* Node */[
                  rprio,
                  right[1],
                  left,
                  remove_top(right)
                ];
        }
      }
      else {
        return param[3];
      }
    }
    else {
      return left;
    }
  }
  else {
    throw Queue_is_empty;
  }
}

function extract(queue) {
  if (queue) {
    return /* tuple */[
            queue[0],
            queue[1],
            remove_top(queue)
          ];
  }
  else {
    throw Queue_is_empty;
  }
}

var PrioQueue = /* module */[
  /* Empty */0,
  insert,
  Queue_is_empty,
  remove_top,
  extract
];

exports.PrioQueue = PrioQueue;
/* No side effect */