select 
    e.first_name,
    e.last_name, 
    e.salary, 
    (e.salary * 1.1) as "increased_salary" 
from employee e inner join branch b on e.branch_id = b.branch_id 
where b.branch_name = 'Corporate';

select 
    e.first_name,
    e.last_name,
    e.salary
from employee e where e.salary between 60000 and 80000 and e.sex = 'M';

select
    e.first_name,
    e.last_name,
    e.branch_id,
    e.salary
from employee e order by e.branch_id desc, e.salary asc;

select
    e.first_name,
    e.last_name,
    w.total_sales
from employee e inner join works_with as w on e.emp_id = w.emp_id inner join client as c on w.client_id = c.client_id
where c.client_name = 'FedEx' and e.salary >= 60000;

select
    sum(e.salary) as "total_salary",
    max(e.salary) as "max_salary",
    min(e.salary) as "min_salary",
    avg(e.salary) as "avg_salary"
from employee e;

select
    count(*) as "total_employees"
from employee e;

select
    b.branch_name,
    count(e.emp_id) as "employees_in_branch"
from branch b inner join employee e on b.branch_id = e.branch_id
group by b.branch_name;