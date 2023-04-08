-- 코드를 입력하세요
-- 동물 보호소에 들어온 동물 중 아픈 동물1의 아이디와 이름을 조회하는 SQL 문 작성 이게 핵심이다.
-- INTAKE_CONDITION이 Sick 이면 조회해 준다.
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = 'Sick';