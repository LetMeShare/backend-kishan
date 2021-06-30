
#include <bits/stdc++.h> 
using namespace std; 


int main()
 {
   int t;
   scanf("%d",&t);
 	while(t--){
 		int count = 0;
 		long long int x, y;
 		scanf("%lld%lld", &x,&y);
 		int flag, j, i;

 		for(int i=x; i<=y; i++){
 			flag = 0;
 			for(int j=2; j<=i/2; j++){
 				if(!(i%j)){
 					flag  = 1;
 					break;
 				}
 				if(!flag)
 					count++;
 				
 		}
 		cout<<count<<"\n";



}
   return 0;
}
