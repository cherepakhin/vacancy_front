# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Store хранит все редусеры:

import { createStore } from 'redux';
import reducer from "./reducer";

const store = createStore(
reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

а каждый редусер имеет свой state:

let lastId = 0;

export default function reducer(state = [], action) {
switch (action.type) {
case actions.TASK_ADD:
    return [...state, {
                       id: ++lastId,
                       title: action.payload.title,
                       completed: false,
                      }
           ];

    case actions.TASK_REMOVE:
      return state.filter(task => action.payload.id !== task.id);

    default:
      return state;
}

### Разница между shallow и mount

Shallow генерирует более поверхностное представление объекта.

Пример представления Shallow (Example.shallow.spec.js), как бы на __1 один уровень__. В примере ниже __компонент FormCheck не отрендерен. Просто обозначен.__:

````javascript
 PASS  src/components/Example.shallow.spec.js
  ● Console

    console.log src/components/Example.shallow.spec.js:24
      <ListGroupItem className={false} variant={[undefined]} active={false} disabled={false}>
        <FormCheck id={100} type="checkbox" label="100. Task 1" checked={false} onChange={[Function: onChange]} />
        <div className="list-group-item-actions">
          <span onClick={[Function: onClick]}>
            Подробнее
          </span>
        </div>
        <div className="list-group-item-actions">
          <span onClick={[Function: onClick]}>
            Удалить
          </span>
        </div>
      </ListGroupItem>
````

Пример представления Mount (Example.mount.spec.js). __Компонент FormCheck(Task.js) отрендерен полностью.__:

````javascript
 PASS  src/components/Example.mount.spec.js
  ● Console

    console.log src/components/Example.mount.spec.js:24
    <Task task={{...}}>
    <ListGroupItem className={false} variant={[undefined]} active={false} disabled={false}>
      <ForwardRef as="div" onClick={[Function (anonymous)]} className="list-group-item" disabled={false}>
        <div disabled={false} onClick={[Function (anonymous)]} className="list-group-item">
		  <FormCheck id={100} type="checkbox" label="100. Task 1" checked={false} onChange={[Function: onChange]}>
			<div style={[undefined]} className="form-check">
			  <FormCheckInput checked={false} onChange={[Function: onChange]} type="checkbox" isValid={false} isInvalid={false} isStatic={false} disabled={false} as="input">
				<input checked={false} onChange={[Function: onChange]} disabled={false} type="checkbox" id={100} className="form-check-input" />
			  </FormCheckInput>
			  <FormCheckLabel title="">
				<label title="" htmlFor={100} className="form-check-label">
				  100. Task 1
				</label>
			  </FormCheckLabel>
           </div>
		 </FormCheck>
         <div className="list-group-item-actions">
            <span onClick={[Function: onClick]}>
			  Подробнее
			</span>
		 </div>
		 <div className="list-group-item-actions">
		   <span onClick={[Function: onClick]}>
		     Удалить
	       </span>
	     </div>
       </div>
      </ForwardRef>
  </ListGroupItem>
  </Task>    
````

### Разница между toBe() и toEqual() в тестах

toBe() подходит, если нужно сравнить примитивные значения либо проверить, является ли переданное значение ссылкой на тот объект, который указан как ожидаемое значение. Значения сравниваются посредством Object.is().

toEqual() используется, если нужно сравнить структуру более сложных типов. Метод выполнит сравнение всех полей переданного объекта с ожидаемым. Он проверит каждый элемент массива, сделав это рекурсивно по всей вложенности.

### Ошибка "could not find react-redux context value"

...please ensure the component is wrapped in a <Provider>"...

### CSS стили

Удаление круглых углов:

в App.css

````javascript
.modal-content {
    -webkit-border-radius: 0px !important;
    -moz-border-radius: 0px !important;
    border-radius: 0px !important;
    -webkit-border: 0px !important;
    -moz-border: 0px !important;
    border: 0px !important;
}

.btn {
    border-radius: 0px !important;
}

.form-control {
    border-radius: 0px !important;
}

.list-group {
    border-radius: 0px !important;
}
````

Порядок действий при изменении App.css:

 - Добавить стили в App.css
 - Обновить страницу в браузере (перезапускать yarn __НЕ НУЖНО__).

Изменение background primary color button в App.css:

````javascript
.btn-primary {
    background-color: #483D8B !important;
}
````

Задание ширины элемента в Bootstrap:

````javacript
        <Modal.Footer>
            <Button className="col-2" variant="primary" onClick={handleConfirmDeleteConfirmDlg}>Да</Button>
            <Button className="col-2" variant="secondary" onClick={handleCancelDeleteConfirmDlg}>Нет</Button>
        </Modal.Footer>
````

__className="col-2"__
(см. src/component/Task.js)

### Размещение на сервере

Собрать:

````shell
yarn build-prod
````
см. package.json:

````shell
...
  "scripts": {
    ...
    "build-prod": "PUBLIC_URL=/redux_simple_app/ react-scripts build",
...
}
````

__PUBLIC_URL=/redux_simple_app/__ указывает по какому пути приложение будет доступно на web-сервере.

Собранный проект будет в build/ :

````shell
yarn run v1.22.5
$ react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  55.71 KB         build/static/js/2.924064c7.chunk.js
  22.69 KB         build/static/css/2.7f1403ef.chunk.css
  1.57 KB (-21 B)  build/static/js/main.ba052924.chunk.js
  1.36 KB          build/static/js/3.8289d0eb.chunk.js
  1.13 KB          build/static/js/runtime~main.fb67d27a.js
  750 B (+58 B)    build/static/css/main.2a690229.chunk.css

````

Содержимое build/ скопировать на сервер v.perm.ru в папку /var/www/redux_simple_app/ 

Доступ к приложению: http://v.perm.ru/redux_simple_app/index.html

### Тестирование компонентов

[https://remarkablemark.org/blog/2017/05/17/testing-react-modal/](https://remarkablemark.org/blog/2017/05/17/testing-react-modal/)

### TODO

Вместо __<Form.Check...__ использовать div: 

````shell
      <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>

````

[https://www.copycat.dev/blog/bootstrap-checkbox/](https://www.copycat.dev/blog/bootstrap-checkbox/)

На пример в проекте при использовании __<Form.Check...__ компонент __Form.Check__: 

````shell
<Form.Check
  id={id}
  type="checkbox"
  label={id+". "+title}
  checked={completed}
  onChange={ () => dispatch(createToggleTaskAction(id)) }
  title="title Form.Check"
/>
````

компилируется в:

````shell
<div class="form-check">
  <input type="checkbox" id="-1" class="form-check-input">
  <label class="form-check-label" title="title Form.Check" for="-1" >-1. позже удалить из показа</label>
</div>
````

и где-то в недрах js событие _onChange()_   

Еще пример [https://stackoverflow.com/questions/71891911/onchange-function-not-working-in-react-bootstraps-form-check-component](https://stackoverflow.com/questions/71891911/onchange-function-not-working-in-react-bootstraps-form-check-component):

````shell
const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("VISA"); // "VISA" по умолчанию
  const onPaymentMethodChange = ({ target: { value } }) => {
    setPaymentMethod(value);
  };
  return (
    <>
      <Form.Group>
        <Form.Label className="my-3" as="legend">
          Select Method
        </Form.Label>
        <Col>
          <Form.Check
            className="my-3"
            type="radio"
            label="PayPal or Credit Card"
            id="PayPal"
            name="paymentMethod"
            value="PAYPAL" // в onPaymentMethodChange уходит значение "PAYPAL"
            checked={paymentMethod === "PAYPAL"} // отмечено, если в state paymentMethod === "PAYPAL" 
            onChange={onPaymentMethodChange} // в onPaymentMethodChange уходит значение "PAYPAL"( в функцию onChange() уходит объект с полем target??? )    
          />
          <Form.Check
            className="my-3"
            type="radio"
            label="Stripe"
            id="Stripe"
            name="paymentMethod"
            value="VISA" // в onPaymentMethodChange уходит значение "VISA"
            checked={paymentMethod === "VISA"} // отмечено, если в state paymentMethod === "VISA" 
            onChange={onPaymentMethodChange}
          />
        </Col>
      </Form.Group>
    </>
  );
};
````

При нажатии Form.Check в метод onChange уходит событие ````{ target: { value } }````.