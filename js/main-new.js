const trElementTemplate = `
<tr class="bid-row">
	<td scope="row">
		<a href="view-and-edit.html">Заявка №%ID%</a>
	</td>
	<td>%CLIENT_NAME%</td>
	<td>
		<span class="badge badge-light badge-lg">
			<span class="icon">%LOGO%</span> %GOOD%
		</span>
	</td>
	<td>%PRICE%</td>
	<td><span class="badge badge-primary">Новая</span></td>
	<td><span class="badge badge-secondary">Нет оплаты</span></td>
</tr>`
 
main()

function main () {
	const url = 'http://89.108.64.67:3000'
	const key = '?key=adjf989f89981045789sdf'
	const address = '/orders'

		document.querySelector('button').addEventListener('click', function() {

	const input = document.forms.firstForm.elements
 //console.log(input)

        let priceCop = input[2].value.replace('.', '')	
    if(priceCop === input[2].value) {
    	priceCop +='00'
    }

	let goodText = ''
	switch(input[1].value) {
		case "1":
		goodText = 'Автомобиль'
		break
		case "2":
		goodText = 'Автобус'
		break
		case "3":
		goodText = 'Трактор'
		break
		case "4":
		goodText = 'Самолет'
		break
		case "5":
		goodText = 'Парусник'
		break
		case "6":
		goodText = 'Поезд'
		break
		case "7":
		goodText = 'Самокат'
		break

		default:
		goodText = 'Неизвестно'

	}

	const newOrder = JSON.stringify({
		good: goodText,
		price: priceCop,
		clientName: input[0].value,
		requestStatus: input[3].value,
		paymentStatus: input[4].value
	
	}) 

	// console.log(newOrder)

	const address = `/order`
//	console.log(address)
		fetch(url + address + key, {
		method: 'POST',
		body: newOrder
	})
		.then(answer => answer.json())
		.then(data => {

	//	console.log(data)

		})

	})


}

// Получить все заказы
// GET /orders

// Получить заказ по ID
// GET /order/:id

// Создать новый заказ
// POST /order body

// Изменить заказ
// PUT /order/:id body

// Удалить заказ
// DELETE /order/:id

// Сброс базы данных
// POST /reinit