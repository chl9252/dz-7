 const trElementTemplate = `
<tr class="bid-row">
	<td scope="row">
		<a href="view-and-edit.html?id=%ID%">Заявка №%ID%</a>
	</td>
	<td>%CLIENT_NAME%</td>
	<td>
		<span class="badge badge-light badge-lg">
			%GOOD%
		</span>
	</td>
	<td>%PRICE%</td>
	<td><span class="badge badge-primary">%REQUESTSTATUS%</span></td>
	<td><span class="badge badge-secondary">%PAYMENTSTATUS%</span></td>
</tr>` 

main() 

function main () {
	const url = 'http://89.108.64.67:3000'
	const key = '?key=adjf989f89981045789sdf'
	const address = '/orders'

/**	const newOrder = JSON.stringify({
		good: "Микроволновка",
		price: 10000,
		clientName: "Дмитрий",
		managerName: "Анастасия",
		paymentStatus: 0,
		requestStatus: 0
	}) */

	fetch(url + address + key, {
		method: 'GET',
		// body: newOrder
	})
		.then(answer => answer.json())
		.then(data => {
			const rootDir = document.getElementById('listViewer')
console.log({data})

			for (const item of data) {
				const tbodyElement = document.createElement('tbody')

		let paymentStatusText = ''

	switch(item.paymentStatus) {
		case "1":
		paymentStatusText = 'Не оплачено'
		break
		case "3":
		paymentStatusText = 'Частичная оплата'
		break
		case "4":
		paymentStatusText = 'Полная оплата'
		break
		case "5":
		paymentStatusText = 'Возврат'
		break

		default:
		paymentStatusText = 'Не оплачено'

	}
	console.log(paymentStatusText)

		let requestStatusText = ''
		switch(item.requestStatus) {
		case "1":
		requestStatusText = 'Новая'
		break
		case "2":
		requestStatusText = 'В работе'
		break
		case "3":
		requestStatusText = 'Ожидается оплата'
		break
		case "4":
		requestStatusText = 'Завершена'
		break
		case "5":
		requestStatusText = 'Отказ'
		break

		default:
		requestStatusText = 'Новая'

	}
	console.log(requestStatusText)

	    let price = item.price.toString()
		price = price.slice(0,-2) + '.' + price.slice(-2)
				tbodyElement.innerHTML = trElementTemplate
					.replace('%ID%', item.id)
					.replace('%ID%', item.id)
					.replace('%GOOD%', item.good)
					.replace('%PRICE%', price)
					.replace('%CLIENT_NAME%', item.clientName)
					.replace('%REQUESTSTATUS%', requestStatusText)
					.replace('%PAYMENTSTATUS%', paymentStatusText)

				rootDir.append(tbodyElement.firstElementChild)
			}
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