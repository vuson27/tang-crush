#include <iostream>
#include <iomanip>
#include <stdio.h>
#include <string.h>
#include <math.h>


using namespace std;
#define g 9.8
struct LoaiOng
{	
	char B[20];
    char MaOng[40];
    float d;
    char DuongKinh[40],ApSuat[40],NhietDo[40],VatLieu[40],TieuChuan[40],LoaiDau[40];
	string Hang;
	float Q;
	float Pf;
};
int main()

{ //Nhap Vat lieu Duong Ong
LoaiOng D[500];
int n;
cout<<"Nhap so duong ong: ";cin>>n;
for(int i=0;i<n;i++)
{   fflush(stdin);
	cout<<"Nhap loai vat lieu: ";cin.getline(D[i].B,20); 
	while(i<n) {
		if(strcmp("Cao su",D[i].B)==0||strcmp("cao su",D[i].B)==0||strcmp("Thep",D[i].B)==0||strcmp("thep",D[i].B)==0){
			fflush(stdin);
    		cout<<"Nhap ma duong ong "<<i+1<<": ";cin.getline(D[i].MaOng,40);
    		fflush(stdin);
    		cout<<"Nhap duong kinh(inch) cua ong "<<i+1<<": ";cin.getline(D[i].DuongKinh,40);
    		fflush(stdin);
    		cout<<"Nhap ap suat(psi) cua ong "<<i+1<<": ";cin.getline(D[i].ApSuat,40);
    		fflush(stdin);
    		cout<<"Nhap nhiet do (F) cua ong "<<i+1<<": ";cin.getline(D[i].NhietDo,40);
    		fflush(stdin);
   			cout<<"Nhap loai vat lieu cua ong "<<i+1<<": ";cin.getline(D[i].VatLieu,40);
    		fflush(stdin);
    		cout<<"Nhap tieu chuan cua ong "<<i+1<<": ";cin.getline(D[i].TieuChuan,40);
    		cout<<"Nhap loai dau cua ong "<<i+1<<": ";cin.getline(D[i].LoaiDau,40);
    		cout<<"Nhap hang cua ong "<<i+1<<": ";cin>>D[i].Hang;
    		cout<<endl;
    		i++;
		} 
		else{
		cout<<"Nhap loai vat lieu: ";cin.getline(D[i].B,20); 
		}
	}
}
//In Danh Sach
cout<<"Nhap thong tin cua loai ong: "<<endl;

cout<<setw(5)<<left<<"STT"<<setw(25)<<left<<"Ma Ong"<<setw(20)<<left<<"Duong Kinh"<<setw(20)<<left<<"Ap Suat"<<setw(20)<<left<<"Nhiet Do "<<setw(20)<<left<<"VatLieu"<<setw(20)<<left<<"Tieu Chuan"<<setw(20)<<left<<"Loai Dau"<<setw(10)<<left<<"Hang"<<endl;
for(int i=0;i<n;i++)
{
    cout<<setw(5)<<left<<i+1<<setw(25)<<left<<D[i].MaOng<<setw(20)<<left<<D[i].DuongKinh<<setw(20)<<left<<D[i].ApSuat<<setw(20)<<left<<D[i].NhietDo<<setw(20)<<left<<D[i].VatLieu<<setw(20)<<left<<D[i].TieuChuan<<setw(20)<<left<<D[i].LoaiDau<<setw(10)<<left<<D[i].Hang<<endl;

}
cout<<endl;
//Tinh Ton That Doc Duong Cua Cac Duong Ong
for(int i = 0; i<n; i++){
	  cout<<"Nhap duong kinh(inch) cua ong "<<i+1<<": ";cin>>D[i].d;
	}
	
for(int i = 0; i < n; i++){
	D[i].Q = (sqrt(2*g*D[i].d)*3.14*(pow(D[i].d,2)/4))*(0.058993*1000/60);
}

for(int i = 0; i < n; i++){
	if(strcmp("Cao su",D[i].B)==0||strcmp("cao su",D[i].B)==0){
		#define C 150
		D[i].Pf = (4.52*pow(D[i].Q,1.85))/(pow(C,1.85)*pow(D[i].d,4.85));
	} else if(strcmp("Thep",D[i].B)==0||strcmp("thep",D[i].B)==0){
		#define C_ 100
		D[i].Pf = (4.52*pow(D[i].Q,1.85))/(pow(C_,1.85)*pow(D[i].d,4.85));
	}else{
		cout<<"Xin loi he thong khong co vat lieu nay!";
	}
	
}
//In ra danh sach ton that duong ong
cout<<endl;
cout<<setw(5)<<left<<"STT"<<setw(25)<<left<<"Ma Ong"<<setw(20)<<left<<"Q(gpm)"<<setw(20)<<left<<"Fictionloss(psi/ff) - Pf"<<endl;
	for(int i=0;i<n;i++)
{
    cout<<fixed<<setw(5)<<left<<i+1<<setw(25)<<left<<setprecision(9)<<D[i].MaOng<<setw(20)<<left<<D[i].Q<<setw(20)<<left<<setprecision(9)<<D[i].Pf<<endl;

}

//Tim kiem Loai Ong
char A[40];
cout<<endl;
fflush(stdin);
cout<<"Nhap ten loai ong can tim: ";cin.getline(A,40);

for(int i = 0; i<n; i++){
    if(strcmp(D[i].MaOng,A)==0)
    { 
     	cout<<"Loai Ong can tim: "<<endl;
		cout<<setw(5)<<left<<"STT"<<setw(25)<<left<<"Ma Ong"<<setw(20)<<left<<"Duong Kinh"<<setw(20)<<left<<"Ap Suat"<<setw(20)<<left<<"Nhiet Do "<<setw(20)<<left<<"VatLieu"<<setw(20)<<left<<"Tieu Chuan"<<setw(20)<<left<<"Loai Dau"<<setw(10)<<left<<"Hang"<<endl;
     	cout<<setw(5)<<left<<i+1<<setw(25)<<left<<D[i].MaOng<<setw(20)<<left<<D[i].DuongKinh<<setw(20)<<left<<D[i].ApSuat<<setw(20)<<left<<D[i].NhietDo<<setw(20)<<left<<D[i].VatLieu<<setw(20)<<left<<D[i].TieuChuan<<setw(20)<<left<<D[i].LoaiDau<<setw(10)<<left<<D[i].Hang<<endl;
     	cout<<endl;
     	cout<<"Ton that cua duong ong: "<<endl;
     	cout<<setw(5)<<left<<"STT"<<setw(25)<<left<<"Ma Ong"<<setw(20)<<left<<"Q(gpm)"<<setw(20)<<left<<"Fictionloss(psi/ff) - Pf"<<endl;
     	cout<<fixed<<setw(5)<<left<<i+1<<setw(25)<<left<<D[i].MaOng<<setw(20)<<left<<D[i].Q<<setw(20)<<left<<D[i].Pf<<endl;
    }
}

     return 0;
}

    messLink: 'http://fb.com' //link mess của các bạn. VD: https://m.me/nam.nodemy
}
