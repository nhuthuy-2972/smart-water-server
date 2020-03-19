#include <stdio.h>


void main()
{
	float  a = 20.12;
	float b = 10.11;
	char ch[200];
	
	snprintf(ch,200,"vara=%f&varb=%f",a,b);
	printf("%s",ch);
}
