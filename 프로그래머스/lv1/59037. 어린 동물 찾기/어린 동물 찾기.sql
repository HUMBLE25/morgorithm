-- 코드를 입력하세요
-- Aged 가 아닌경우의 아이디, 이름을 조회하고 아이디순으로 정렬한다. 오름차순?
SELECT ANIMAL_ID, NAME 
FROM ANIMAL_INS 
WHERE INTAKE_CONDITION != 'Aged' 
ORDER BY ANIMAL_ID;