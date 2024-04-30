## Фронт для программы поиска работы

main - основная ветка
![branch_main.png](doc/branch_main.png)

### Тестирование

````shell
yarn test
````

### Локальный запуск

````shell
yarn start
````

### Сборка для размещения на web сервере

````shell
yarn build-prod
````
см. package.json:

````shell
...
  "scripts": {
    ...
    "build-prod": "PUBLIC_URL=/vacancy/ react-scripts build",
...
}
````

__PUBLIC_URL=/vacancy/__ в package.json указывает по какому пути приложение будет доступно на web-сервере

Собранный проект будет в build/ :

````shell
yarn run v1.22.5
$ react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:
/sorry/index.html
  55.71 KB         build/static/js/2.924064c7.chunk.js
  22.69 KB         build/static/css/2.7f1403ef.chunk.css
  1.57 KB (-21 B)  build/static/js/main.ba052924.chunk.js
  1.36 KB          build/static/js/3.8289d0eb.chunk.js
  1.13 KB          build/static/js/runtime~main.fb67d27a.js
  750 B (+58 B)    build/static/css/main.2a690229.chunk.css

````

Содержимое build/ скопировать на сервер v.perm.ru в папку /var/www/vacancy/

Доступ к приложению: http://v.perm.ru/vacancy/index.html

Этот проект сделан на основе простого проекта с React/Redux/Bootstrap [https://github.com/cherepakhin/redux-simple-app](https://github.com/cherepakhin/redux-simple-app). В нем же описание деталей работы с React/Redux и рабочие заметки (подглядывать в историю git).


### Заметки о css

Изменение правого отступа div элемента c id=list-group-item-actions-right (App.css):

````shell
.list-group-item-actions-last {
  right: 11px;
}
````

Tooltip:

Содержание подсказки (tooltip) определяется  в поле _title_:

````shell
<div id="idDeleteBtn" className="col-1 list-group-item-actions list-group-item-actions-last" title="Удалить вакансию">
````

Ошибка "digital envelope routines::unsupported"

Ответ:

[https://paolochang.github.io/posts/bugfix-digital_envelope_routines_unsupported/](https://paolochang.github.io/posts/bugfix-digital_envelope_routines_unsupported/)

If you encounter the “digital envelope routines::unsupported” error, you may be tempting to use the following easiest solutions:

Downgrade Node.js to pre v17 
OR
Use the legacy SSL provider:

````json
{
  "scripts": {
    "start": "react-scripts --openssl-legacy-provider start"
  }
}
````

Использован 2 вариант.

#### Последняя колонка

Последняя колонка либо вылазит за пределы таблицы, либо после нее остается много пустого места. Для решения этого, в дополнении к атрибуту обычной колонки __list-group-item-action__, сделано свойство __list-group-item-action-last__  и добавлен аттрибут __!important;__.

````
    <div id="idMoreBtn" className="col-1 list-group-item-action" title="Подробнее о вакансии">
      <span onClick={() => openMoreDlg(id)} tabIndex={0} role="button">Подробнее</span>
    </div>
    <div id="idDeleteBtn" className="col-1 list-group-item-action list-group-item-action-last" title="Удалить вакансию">
      <span onClick={() => openDeleteConfirmDlg(id)} tabIndex={-1} role="button">Удалить</span>
    </div>
````

css:
````    
.list-group-item-action {
  text-align: center;
  padding-right: 1ch;
  padding-left: 1ch;

  clear: both;
  height: 1px;
  float:left;

  min-width: 12ch;
}

.list-group-item-action-last {
  right: 1ch;
  min-width: 7ch;
  max-width: 7ch !important;
}
    
````

#### Установка ширины элементов в "колонках"

В Bootstrap сетка состоит из 12 "колонок". В примерах ниже элементам выделяется 1 колонка. В зависимости от размера окна ширина колонки меняется.   

````
<Button className="... col-1">...</Button>
````

Пример в App.js (col-1): 

````    
<Col xs={12} className="mt-2 mb-2">
  <Button className="ml-0 pl-1 pr-1 col-1">Все</Button>
  <Button className="ml-1 pl-1 pr-1 col-1">Текущие</Button>
  <Button className="ml-1 pl-1 pr-1 col-1">Новая</Button>
</Col>
````    

#### Ссылки

- [Диаграмма состояний](https://app.diagrams.net/?src=about#G1i8cVXJXj7xbnOIqtzitvihxvn_yiwOuJ#%7B%22pageId%22%3A%226vxvHjby1d88luMmcxHr%22%7D)<br/>
- [Ошибка /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28' not found](http://v.perm.ru/main/index.php/75-oshibka-lib-x86-64-linux-gnu-libc-so-6-version-glibc-2-28-not-found)

#### TODO

- Jest
- soFetch
- Добавить диалог "Добавить событие" к вакансии. Будут 2 даты: дата создания и дата последнего события.
- Добавить сортировку по Дате, Приоритету, Дате последнего события. 
- "Подробнее" показывать на полном экране. Много деталей, пространства МОДАЛЬНОГО ДИАЛОГА не хватает.
- Про размещение на мобиле забить, т.к. требуется совсем другая компоновка. Для мобилы делать СОВСЕМ отдельный интерфейс. 
- Camunda
