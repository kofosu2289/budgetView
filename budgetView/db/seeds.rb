# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Seeding data...'

puts ' Creating CoolCatTeenX'

CoolCatTeenX = User.create!({
	first_name: 'CoolCat',
	last_name: 'TeenX',
	email: 'coolcat@TeenX.com',
	password_digest: '1234567'

})

CoolCatTeenX.categories.create!({
	name: 'School',
	board_type: 'expense',
	goal: 100,
	current_total: 0
})

CoolCatTeenX.categories.create!({
	name: 'Transportation',
	board_type: 'expense',
	goal: 60,
	current_total: 0
})

CoolCatTeenX.categories.create!({
	name: 'Hobbies',
	board_type: 'expense',
	goal: 250,
	current_total: 0
})

CoolCatTeenX.categories.create!({
	name: 'Allowance',
	board_type: 'income',
	goal: 100,
	current_total: 0
})

CoolCatTeenX.categories.create!({
	name: 'Babysit',
	board_type: 'income',
	goal: 10000,
	current_total: 0
})

entry1 = Entry.create!({
	name: 'Binders',
	category_id: 1,
	description: 'Bought binders for 3 classes',
	amount: 50,
  date: "08/12/2019"
	})

entry2 = Entry.create!({
	name: 'Pens',
	category_id: 1,
	description: 'Bought Pens for 1 class',
	amount: 2,
  date: "08/12/2019"
	})

entry3 = Entry.create!({
	name: 'Uber',
	category_id: 2,
	description: 'Took uber to school',
	amount: 20,
  date: "08/12/2019"
	})

entry4 = Entry.create!({
	name: 'Laser Tag',
	category_id: 3,
	description: 'Played laser tag with friends',
	amount: 40,
	date: "08/12/2019"

	})

entry5 = Entry.create!({
	name: 'July',
	category_id: 4,
	description: 'Allowance for july',
	amount: 25,
  date: "08/12/2019"

	})

entry6 = Entry.create!({
	name: 'August',
	category_id: 4,
	description: 'Allowance for august',
	amount: 25,
	date: "08/12/2019" 

	})




