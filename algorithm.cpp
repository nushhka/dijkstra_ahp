/*
Title : Code for the optimization of the Dijkstra's algorithm considering various paramters like :
        road conditons, shortes path, weather conditions and risk factors.

Author : Aditya Sahani(B22CS003), Saumitra Agrawal(B22AI054), Anushka (B22CS097)  

Methodoloy : Used the standard AHP( Analytic Hierarchy Process) and the Dijkstra's algorithm in combination to get most optimized path from source
             to destination.

Language : C++             

*/

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void matrix_mul(vector<vector<vector<int>>> mat,double dist_ctr,double road_ctr, double weather_ctr,  vector<vector<vector<double>>> &ans){

    vector<double> ctr = {0.0,dist_ctr,road_ctr};
    for(int i  = 0;i<mat.size();i++){
        
        vector<vector<double>> a2;
        for(int j = 0;j<mat[i].size();j++){
            double pro = 0.0;
           
            vector<double> a1;
            for(int k = 0;k < mat[i][j].size();k++){
              
               pro = pro + (mat[i][j][k] * ctr[k]);
            }
    
            a1.push_back(mat[i][j][0] * 1.0);
            a1.push_back(pro);
            
            a2.push_back(a1);
        }
        
        ans.push_back(a2);
    }
    
}

int main(){
    double dist_ctr = 0.6115;
    double road_ctr = 0.2032;
    double weather_ctr = 0.142;
    double risk_ctr = 0.102;
    //these are the standard paramters find using the AHP process

    vector<vector<vector<int>>> matrix = {
        {{1,5,2},{2,4,2}},
        {{0,5,2},{3,6,1},{2,12,3},{4,15,3}},
        {{0,4,2},{1,12,3},{4,3,1},{6,6,1}},
        {{1,6,1},{4,13,3},{5,9,3}},
        {{6,8,3},{2,3,1},{1,15,3},{3,13,3},{5,6,2},{7,2,1}},
        {{3,9,2},{4,6,2}},
        {{2,6,1},{4,8,3}},
        {{4,2,1}}
    };
    
   vector<vector<vector<double>>> ans;
   matrix_mul(matrix,dist_ctr,road_ctr,weather_ctr,ans);

  
   //code for shortest distance between source to any destination
   priority_queue<pair<double,double>,vector<pair<double,double>>,greater<pair<double,double>>> pq;
   int n = 8;
   vector<double> dist(n);
   for(int i  = 0;i < n;i++) dist[i] = 1e9;
   vector<int>  parent(n + 1);
        for (int i = 1; i <= n; i++)
            parent[i] = i;
   dist[0] = 0; 
   pq.push({0.0,0.0});

   while(!pq.empty()){
     auto curr = pq.top();
     double node = curr.second;
     double dis = curr.first;
     pq.pop();
     for(auto it : ans[node]){
        double edgeWeight = it[1];
        double adjNode = it[0];

        if(dis + edgeWeight < dist[adjNode]){
          dist[adjNode] = dis + edgeWeight;
          pq.push({dist[adjNode],adjNode});
           parent[adjNode] = node;
        }
     }

    }


       if (dist[n] == 1e9)
            return {-1};

        // Store the final path in the ‘path’ array.
        vector<int> path;
        int node = 4;

        // Iterate backwards from destination to source through the parent array.
        while (parent[node] != node)
        {
            path.push_back(node);
            node = parent[node];
        }
        path.push_back(1);

        // Since the path stored is in a reverse order, we reverse the array
        // to get the final answer and then return the array.
        reverse(path.begin(), path.end());
       
        path[0] = 0;

        cout << "SHORTEST PATH : " << endl;
        for(auto it : path){
         cout << it << " ";
        }
  
    return 0;
}