# list: 변수 하나에 여러 개의 자료 동시에 저장, 셀 안에 셀(대괄호 사용해서)도 가능
중고차 = ['KS', 'white', [5000, 7000]]

print(중고차) # 입력한 그대로 출력 
print(중고차[0])

중고차[1] = 'black'
print(중고차) # white -> black으로 수정