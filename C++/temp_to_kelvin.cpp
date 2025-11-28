#include <iostream>
using namespace std;
int main()
{
    float k,f;
    cout<<"Enter the temperature in kelvin";
    cin>>k;
    f=(k-273.15)*9/5+32;
    cout<<"The temperature in fahrenheit is"<<f;
    return 0;
}                     