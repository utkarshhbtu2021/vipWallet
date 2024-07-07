export const digitCommaSeperation = value => {
    if (value) {
      let break_array = value.toString().split('.')
      let decimal_part = break_array.length > 1 ? break_array[1] : ''
      var value_arr = break_array[0].toString().split('').reverse()
      var neww = ''
      var rreverse = ''
      let final = 0
      if (value_arr.length > 3) {
        for (var r in value_arr) {
          neww = neww + value_arr[r]
          if (r * 1 + 1 != value_arr.length) {
            if (r * 1 + 1 == 3) {
              neww = neww + ','
            } else if (r * 1 + 1 > 3 && (r * 1 + 1) % 2 == 1) {
              neww = neww + ','
            }
          }
        }
        rreverse = neww
        final = rreverse.split('').reverse().join('') + (decimal_part ? '.' + decimal_part.substr(0, 3) : '')
        return final
      } else {
        final = break_array[0] + (decimal_part ? '.' + decimal_part.substr(0, 2) : '')
        return final
      }
    } else {
      return ''
    }
  }