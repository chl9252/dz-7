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
	<td><span class="badge %CLASSSTAT%">%REQUESTSTATUS%</span></td>
	<td><span class="badge %CLASSPAY%">%PAYMENTSTATUS%</span></td>
</tr>` 

main() 

function main () {
	const url = 'http://89.108.64.67:3000'
	const key = '?key=adjf989f89981045789sdf'
	const address = '/orders'


	fetch(url + address + key, {
		method: 'GET',
		// body: newOrder
	})
		.then(answer => answer.json())
		.then(data => {
			const rootDir = document.getElementById('listViewer')
  //console.log({data})

	for (const item of data) {
		const tbodyElement = document.createElement('tbody')

	let paymentStatusText = ''
	let classText = ''
	let classTextPay = ''
	switch(item.paymentStatus) {
		case "1":
		paymentStatusText = 'Не оплачено'
		classTextPay = 'badge-secondary'
		break
		case "3":
		paymentStatusText = 'Частичная оплата'
		classTextPay = 'badge-warning'
		break
		case "4":
		paymentStatusText = 'Полная оплата'
		classTextPay = 'badge-success'
		break
		case "5":
		paymentStatusText = 'Возврат'
		classTextPay = 'badge-dark'
		break

		default:
		paymentStatusText = 'Не оплачено'
		classTextPay = 'badge-secondary'

	}

	let requestStatusText = ''
	switch(item.requestStatus) {
		case "1":
		requestStatusText = 'Новая'
		classText = 'badge-primary'
		break
		case "2":
		requestStatusText = 'В работе'
		classText = 'badge-light'
		break
		case "3":
		requestStatusText = 'Ожидается оплата'
		classText = 'badge-warning'
		break
		case "4":
		requestStatusText = 'Завершена'
		classText = 'badge-success'
		break
		case "5":
		requestStatusText = 'Отказ'
		classText = 'badge-secondary'
		break

		default:
		requestStatusText = 'Новая'
		classText = 'badge-primary'

	}


	

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
					.replace('%CLASSSTAT%', classText)
					.replace('%CLASSPAY%', classTextPay)
					

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