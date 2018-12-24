/**
 * Author: lawliet
 * Date: 2018.12.24
 */ 

-- // # Write your MySQL query statement below

-- // Table: Person

-- // +-------------+---------+
-- // | Column Name | Type    |
-- // +-------------+---------+
-- // | PersonId    | int     |
-- // | FirstName   | varchar |
-- // | LastName    | varchar |
-- // +-------------+---------+
-- // PersonId is the primary key column for this table.
-- // Table: Address

-- // +-------------+---------+
-- // | Column Name | Type    |
-- // +-------------+---------+
-- // | AddressId   | int     |
-- // | PersonId    | int     |
-- // | City        | varchar |
-- // | State       | varchar |
-- // +-------------+---------+
-- // AddressId is the primary key column for this table.
 

-- // Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:

-- // FirstName, LastName, City, State

SELECT a.FirstName, a.LastName, b.City, b.State FROM Person as a LEFT JOIN Address as b ON a.PersonId = b.PersonId
