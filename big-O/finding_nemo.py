import time
nemo = ['demo', 'gemo', 'cemo']

def finding_nemo (array):
    start_time = time.time()
    for i in array:
        if i == 'nemo':
            print("Found NEMO!")
            return

    print("Nemo is not here")
    print("---%s seconds ---"% (time.time()-start_time))


finding_nemo(nemo)
