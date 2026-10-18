DB NAME:: php_118
TABLE :: customers
Fields: id, name, email, phone, created_at, updated_at

---------- SQL QUERIES ----------

myid = 1

1 - SELECT
    -> select * from tbl
    -> select id, name from tbl
    -> select * from tbl where id = myid

2 - INSERT
    -> insert into tbl (name, email, phone) values ('$name', '$email', '$phone')

3 - DELETE
    -> delete from tbl where id = myid

4 - UPDATE
    -> update tbl set name='$name', email='$email', phone='$phone' where id = myid