#include <bits/stdc++.h>
using namespace std;

int main() {
  int h, w;
  cin >> h >> w;

  vector<vector<int>> cells(h, vector<int>(w));

  for(int i = 0;i < h;i++) {
    for(int j = 0;j < w;j++) {
      cin >> cells[i][j];
    }
  }

  int sum_h[w] = {0};
  int sum_w[h] = {0};

  for (int i = 0; i < h; i++) {
    for (int j = 0; j < w; j++) {
      sum_h[j] += cells[i][j];
      sum_w[i] += cells[i][j];
    }
  }

  vector<vector<int>> resultCells(h, vector<int>(w));

  for (int i = 0; i < h; i++) {
    for (int j = 0; j < w; j++) {
      resultCells[i][j] = sum_w[i] + sum_h[j];
      resultCells[i][j] -= cells[i][j];
  
      cout << resultCells[i][j];
  
      if (j == w - 1) {
        break;
      }
  
      cout << " ";
    }
  
    cout << endl;
  }

  return 0;
}
