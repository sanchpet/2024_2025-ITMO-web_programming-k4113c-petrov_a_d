# Практика №1

## Задание

**Дано**: файлы greeting_en.js и greeting_ru.js содержащие локализации приветствия.

**Решить**:  выбрать и импортировать один из этих файлов в зависимости от того какое обозначение языка передано в программу (в главный файл index.js)

## Дополнительно

1) Добавьте обработку случая неверного переданного языка
2) Добавьте ещё три языка – zh (китайский), hi (хинди) и pt (португальский)

## Пример работы приложения

```
$ node --version
v23.2.0
$ node index.js ru
Приветствие магистрантам!
$ node index.js en
Hello to the masters!
$ node index.js hi
अंडरग्रेजुएट्स को बधाई!
$ node index.js zh
向本科生致意!
$ node index.js pt
Saudações aos magistrados!
$ node index.js al
Error: language "al" is not supported
```
