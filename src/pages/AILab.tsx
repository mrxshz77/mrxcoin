import { useState } from 'react';
import { Brain, Bot, TrendingUp, Settings, Play, Pause, Square, Download, Upload, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout';

// Mock AI models data
const aiModels = [
  { name: 'DDPG Agent v2.1', type: 'Reinforcement Learning', accuracy: 94.2, size: '45MB' },
  { name: 'LSTM Predictor', type: 'Time Series', accuracy: 87.8, size: '23MB' },
  { name: 'Transformer XL', type: 'Deep Learning', accuracy: 91.5, size: '156MB' },
  { name: 'CNN Classifier', type: 'Classification', accuracy: 89.3, size: '67MB' },
];

// Mock training data
const trainingData = [
  { name: 'SOL/USDT 1M', size: '2.3GB', period: '2020-2024', status: 'Ready' },
  { name: 'BTC/USDT 5M', size: '1.8GB', period: '2019-2024', status: 'Processing' },
  { name: 'ETH/USDT 15M', size: '967MB', period: '2021-2024', status: 'Ready' },
  { name: 'DeFi Tokens Dataset', size: '4.1GB', period: '2020-2024', status: 'Ready' },
];

export default function AILab() {
  const [selectedModel, setSelectedModel] = useState('');
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [epochs, setEpochs] = useState(100);
  const [learningRate, setLearningRate] = useState(0.001);
  const [batchSize, setBatchSize] = useState(32);

  const startTraining = () => {
    setIsTraining(true);
    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  const stopTraining = () => {
    setIsTraining(false);
    setTrainingProgress(0);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="hero-gradient rounded-xl p-6 border border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Laboratory
              </h1>
              <p className="text-muted-foreground mt-2">
                Advanced AI model training and backtesting environment
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge variant="secondary">
                GPU Accelerated
              </Badge>
              <Badge variant="outline">
                TensorFlow.js
              </Badge>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="models" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="models">AI Models</TabsTrigger>
            <TabsTrigger value="training">Training Lab</TabsTrigger>
            <TabsTrigger value="backtesting">Backtesting</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>

          {/* AI Models Tab */}
          <TabsContent value="models" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Available Models */}
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5" />
                    <span>Available Models</span>
                  </CardTitle>
                  <CardDescription>Pre-trained and custom AI models</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {aiModels.map((model, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                          selectedModel === model.name 
                            ? 'bg-primary/20 border-primary/30' 
                            : 'bg-background/50 border-border/30 hover:bg-background/70'
                        }`}
                        onClick={() => setSelectedModel(model.name)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{model.name}</div>
                            <div className="text-sm text-muted-foreground">{model.type}</div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary">{model.accuracy}% ACC</Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">Size: {model.size}</span>
                          <Button size="sm" variant="outline">
                            <Download className="mr-2 h-3 w-3" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Model Performance */}
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Real-time model performance</CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedModel ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                          <div className="text-2xl font-bold text-primary">94.2%</div>
                          <div className="text-sm text-muted-foreground">Accuracy</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
                          <div className="text-2xl font-bold text-success">2.3ms</div>
                          <div className="text-sm text-muted-foreground">Latency</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                          <div className="text-2xl font-bold text-accent">156</div>
                          <div className="text-sm text-muted-foreground">Trades/Day</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-warning/10 border border-warning/20">
                          <div className="text-2xl font-bold text-warning">+23.4%</div>
                          <div className="text-sm text-muted-foreground">ROI</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Win Rate</span>
                          <span className="text-sm font-medium">89.2%</span>
                        </div>
                        <Progress value={89.2} className="h-2" />
                        <div className="flex justify-between">
                          <span className="text-sm">Sharpe Ratio</span>
                          <span className="text-sm font-medium">2.45</span>
                        </div>
                        <Progress value={82} className="h-2" />
                        <div className="flex justify-between">
                          <span className="text-sm">Max Drawdown</span>
                          <span className="text-sm font-medium">-5.2%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Brain className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Select a model to view metrics</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Training Lab Tab */}
          <TabsContent value="training" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Training Configuration */}
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Training Configuration</span>
                  </CardTitle>
                  <CardDescription>Configure hyperparameters and training settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Model Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ddpg">DDPG Agent</SelectItem>
                            <SelectItem value="lstm">LSTM Network</SelectItem>
                            <SelectItem value="transformer">Transformer</SelectItem>
                            <SelectItem value="cnn">CNN Classifier</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Epochs</Label>
                        <Input
                          type="number"
                          value={epochs}
                          onChange={(e) => setEpochs(Number(e.target.value))}
                        />
                      </div>

                      <div>
                        <Label>Learning Rate</Label>
                        <Input
                          type="number"
                          step="0.0001"
                          value={learningRate}
                          onChange={(e) => setLearningRate(Number(e.target.value))}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Batch Size</Label>
                        <Input
                          type="number"
                          value={batchSize}
                          onChange={(e) => setBatchSize(Number(e.target.value))}
                        />
                      </div>

                      <div>
                        <Label>Optimizer</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Adam" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="adam">Adam</SelectItem>
                            <SelectItem value="sgd">SGD</SelectItem>
                            <SelectItem value="rmsprop">RMSprop</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch id="early-stopping" />
                        <Label htmlFor="early-stopping">Early Stopping</Label>
                      </div>
                    </div>
                  </div>

                  {/* Training Progress */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Training Progress</Label>
                      <span className="text-sm font-medium">{trainingProgress}%</span>
                    </div>
                    <Progress value={trainingProgress} className="h-3" />
                    <div className="flex space-x-2">
                      <Button 
                        onClick={startTraining} 
                        disabled={isTraining}
                        className="trading-button-primary flex-1"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Start Training
                      </Button>
                      <Button 
                        onClick={stopTraining} 
                        disabled={!isTraining}
                        variant="outline" 
                        className="flex-1"
                      >
                        <Square className="mr-2 h-4 w-4" />
                        Stop
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Training Data */}
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle>Training Data</CardTitle>
                  <CardDescription>Available datasets for training</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trainingData.map((data, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30">
                        <div>
                          <div className="font-medium text-sm">{data.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {data.size} • {data.period}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={data.status === 'Ready' ? 'default' : 'secondary'}>
                            {data.status}
                          </Badge>
                          <Button size="sm" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Custom Data
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Backtesting Tab */}
          <TabsContent value="backtesting" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Backtest Configuration */}
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Backtest Setup</span>
                  </CardTitle>
                  <CardDescription>Configure backtesting parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label>Trading Pair</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pair" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sol-usdt">SOL/USDT</SelectItem>
                          <SelectItem value="btc-usdt">BTC/USDT</SelectItem>
                          <SelectItem value="eth-usdt">ETH/USDT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Time Range</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input type="date" />
                        <Input type="date" />
                      </div>
                    </div>

                    <div>
                      <Label>Initial Capital</Label>
                      <Input type="number" placeholder="10000" />
                    </div>

                    <div>
                      <Label>Strategy Parameters</Label>
                      <Input placeholder="Custom parameters..." />
                    </div>

                    <Button className="trading-button-primary w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Run Backtest
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Backtest Results */}
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle>Backtest Results</CardTitle>
                  <CardDescription>Performance metrics from latest run</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-success/10">
                        <div className="text-xl font-bold text-success">+234.5%</div>
                        <div className="text-sm text-muted-foreground">Total Return</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-primary/10">
                        <div className="text-xl font-bold text-primary">2.45</div>
                        <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Win Rate</span>
                        <span className="text-sm font-medium">78.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Max Drawdown</span>
                        <span className="text-sm font-medium">-12.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Total Trades</span>
                        <span className="text-sm font-medium">1,234</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Avg Trade Duration</span>
                        <span className="text-sm font-medium">4.2h</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Export Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Deployment Tab */}
          <TabsContent value="deployment" className="space-y-6">
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>Model Deployment</CardTitle>
                <CardDescription>Deploy trained models to live trading</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Bot className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Ready for Deployment</h3>
                  <p className="text-muted-foreground mb-6">
                    Deploy your trained AI models to start automated trading
                  </p>
                  <Button className="trading-button-primary">
                    <Play className="mr-2 h-4 w-4" />
                    Deploy to Live Trading
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}