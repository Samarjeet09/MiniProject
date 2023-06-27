import os 
for i in os.listdir():
    print(i)
    os.rename(i,i.replace(':','-'))