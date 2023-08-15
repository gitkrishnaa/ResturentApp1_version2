cart={
itemId:{
    itemname:
    item price:
    item number:
}


}
# when add to cart any product
first see cart.itemid==undefined
if true,it mean it not exist so add this item with number =1
else item already exist so just increase the size

note - the item id will be array ith element 

# remove from cart
just remove that item using item id

# incease or decrese
just cary.itemid.number+=1 or -1 if more than 1

# add total amount
use for of loop and add total+=cart.key.number*cart.key.price

