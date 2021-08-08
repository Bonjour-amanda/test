# Task 4

#### 1. Make the code below cleaner and readable

```php
public function getPrice() {
    if($customer->group == 'distributor') {
        if($customer->status == 'active') {
            if($customer->debt > 10000000) {
                return error('this customer cannot make a purchase due to his debt over limit');
            } else {
                return Price::get('distributor');
            }
        } else {
            return error('this customer is not active')
        }
                } elseif($customer->group == 'general') {
        if($customer->status == 'active') {
            if($customer->debt > 10000000) {
                return error('this customer cannot make a purchase due to his debt over limit');
            } else {
                return Price::get('general');
            }
        } else {
            return error('this customer is not active')
        }
                } elseif($customer->group == 'general') {
        if($customer->status == 'active') {
            if($customer->debt > 10000000) {
                return error('this customer cannot make a purchase due to his debt over limit');
            } else {
                return Price::get('general');
            }
        } else {
            return error('this customer is not active')
        }
    }
}

/* My Answer Using Javascript */
const getPrice = (customer) => {
    
    const price = (get) => {
        const result = get === 'distributor' ? 'distributor' : 'general';
        return result
    }

    const group = customer.group === 'distributor' ? price(customer.group) : price(customer.group)
    const status = customer.status === 'active' ? group : 'this customer is not active'
    const debt = customer.debt > 10000000 ? 'this customer cannot make a purchase due to his debt over limit' : status

    return debt
}

// test case
const customer1 = {
    group : 'distributor',
    status : 'active',
    debt : 100,
}
const customer2 = {
    group : 'distributor',
    status : 'active',
    debt : 10000000000000000,
}
const customer3 = {
    group : 'distributor',
    status : 'not active',
    debt : 1000,
}
const customer4 = {
    group : 'general',
    status : 'active',
    debt : 1000,
}
console.log(getPrice(customer1))
console.log(getPrice(customer2))
console.log(getPrice(customer3))
console.log(getPrice(customer4))

```

#### 2. After change the code, make a pull request