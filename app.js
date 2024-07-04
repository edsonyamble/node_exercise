const obj = {}
obj.name = 'Edson'
obj['city'] = 'abidjan'
console.log(obj)
delete obj.city
console.log(obj)
//map позволяет создавать ключи любово типа мап позволяет обект как ключи мап болеее произвостивный для дабавление ключи и удалить
const map = new Map()
map.set('name', 'Kcenea')
map.set('years', 28)
const edson = { name: 'edson' }
map.set(edson, 'object edson in map ')
console.log(map.keys)
// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.
